'use client';

import { mockProjects } from '@/entities/project';
import { ProjectList } from '@/widgets/project-list';

const HomePage = () => {
  return <ProjectList projects={mockProjects} />;
};

export default HomePage;
