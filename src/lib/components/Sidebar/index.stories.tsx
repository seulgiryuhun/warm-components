/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '@/lib/components/Sidebar';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  args: {
    headerHeight: 0,
    right: true,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <MemoryRouter>
        border는 storybook에서 확인하기 위해 추가함
        <div
          style={{
            border: '1px gray solid',
            width: '100%',
            height: '1000px',
            background: 'gray',
          }}
        >
          <button onClick={() => setIsOpen(true)}>sidebar open</button>
          <Sidebar
            isOpen={isOpen}
            headerHeight={args.headerHeight}
            onXBtnClick={() => setIsOpen(false)}
            right={args.right}
            links={[
              { name: 'all', href: 'all', isExternal: false },
              {
                name: '스클',
                isExternal: true,
                href: 'https://www.spacecloud.kr',
              },
            ]}
          />
        </div>
      </MemoryRouter>
    );
  },
};
