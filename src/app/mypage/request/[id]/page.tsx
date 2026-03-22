import { notFound, redirect } from 'next/navigation';

import { ProjectResponseType } from '@/entities/project';
import { getMyProject } from '@/entities/project/index.server';
import { ProjectRequestDetailPage } from '@/views/project-request-detail';

const isProjectResponse = (
  data: Awaited<ReturnType<typeof getMyProject>>,
): data is ProjectResponseType => {
  return Boolean(data && 'data' in data);
};

const ProjectRequestDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const projectId = Number(id);

  if (Number.isNaN(projectId)) {
    notFound();
  }

  const initialProjectData = await getMyProject(projectId);

  if (!initialProjectData) {
    redirect('/mypage');
  }

  if (initialProjectData?.code === 403) {
    redirect('/mypage?error=forbidden');
  }

  if (initialProjectData?.code === 404) {
    notFound();
  }

  if (!isProjectResponse(initialProjectData)) {
    redirect('/mypage');
  }

  return <ProjectRequestDetailPage initialProjectData={initialProjectData} />;
};

export default ProjectRequestDetail;
