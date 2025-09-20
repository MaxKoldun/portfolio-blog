'use client';

import { TextButton } from '@/components';

export const ConnectSectionId = 'ConnectSectionId';

function DownloadFileButton({
  children,
  path,
}: {
  path: string;
  children: React.ReactNode;
}) {
  function handleDownloadClick() {
    const link = document.createElement('a');
    link.href = path;
    link.download = path;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return <TextButton onClick={handleDownloadClick}>{children}</TextButton>;
}

export { DownloadFileButton };
