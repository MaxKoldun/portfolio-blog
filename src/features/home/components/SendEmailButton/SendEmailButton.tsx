'use client';

import { TextButton } from '@/components';

export const ConnectSectionId = 'ConnectSectionId';

function SendEmailButton({
  children,
  email,
}: {
  email: string;
  children: React.ReactNode;
}) {
  function handleEmailClick() {
    window.location.href = `mailto:${email}`;
  }

  return <TextButton onClick={handleEmailClick}>{children}</TextButton>;
}

export { SendEmailButton };
