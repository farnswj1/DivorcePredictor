import { type FC, type ReactNode } from 'react';
import { Box, Stack, Text } from '@mantine/core';
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
    <Stack justify="flex-start" gap="lg">
      <HeaderTypography>
        {title}
      </HeaderTypography>
      {description && (
        <Text size="md">
          {description}
        </Text>
      )}
      <Box>
        {content}
      </Box>
    </Stack>
  </Paper>
);

export default Section;
