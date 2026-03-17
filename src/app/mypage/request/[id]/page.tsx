import { getMyProject } from '@/entities/project/index.server';
import { ProjectRequestDetailPage } from '@/views/project-request-detail';

const ProjectRequestDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const [initialProjectData] = await Promise.all([getMyProject(Number(id))]);

  return <ProjectRequestDetailPage initialProjectData={initialProjectData} />;
};

export default ProjectRequestDetail;
