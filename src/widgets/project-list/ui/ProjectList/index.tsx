'use client';

import { useState } from 'react';

import { ProjectCard, ProjectModal, ProjectWithLike } from '@/entities/project';
import { LikeButton } from '@/features/like-project';
import { cn } from '@/shared/utils';

interface ProjectListProps {
  projects: ProjectWithLike[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const [likedProjects, setLikedProjects] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    projects.forEach((project) => {
      initial[project.id] = project.isLiked;
    });
    return initial;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectWithLike | null>(null);

  const handleLikeToggle = (projectId: number) => {
    setLikedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
    // TODO: API 호출 구현
  };

  const handleDetailClick = (project: ProjectWithLike) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className={cn('flex flex-wrap gap-x-5 gap-y-4')}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDetailClick={() => handleDetailClick(project)}
            LikeButton={
              <LikeButton
                projectId={project.id}
                isLiked={likedProjects[project.id] || false}
                onToggle={handleLikeToggle}
              />
            }
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          LikeButton={
            <LikeButton
              projectId={selectedProject.id}
              isLiked={likedProjects[selectedProject.id] || false}
              onToggle={handleLikeToggle}
            />
          }
        />
      )}
    </>
  );
};

export default ProjectList;
