import { type FC, type ReactNode } from 'react';
import { Text } from '@mantine/core';
import { HeaderTypography, Paper } from '~/components';

interface SectionProps {
  title: string;
  description?: string;
  content: ReactNode;
  center?: boolean;
}

const Section: FC<SectionProps> = ({
  title,
  description,
  content,
  center = false
}) => (
  <Paper ta={center ? 'center' : undefined} bg="white">
    <HeaderTypography mb="lg">
      {title}
    </HeaderTypography>
    {description && (
      <Text size="md" mb="lg">
        {description}
      </Text>
    )}
    {content}
  </Paper>
);

export default Section;
