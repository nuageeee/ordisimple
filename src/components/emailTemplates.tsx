import { div } from 'motion/react-client';
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplates({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}</h1>
    </div>
  )
}