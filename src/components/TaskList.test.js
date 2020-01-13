import PureTaskList from './TaskList.svelte';
import { render } from '@testing-library/svelte';
import { withPinnedTasksData } from './TaskList.stories';

test('TaskList ', async () => {
  const { container } = await render(TaskList, {
    props: {
      tasks: withPinnedTasks,
    },
  });
  expect(container.firstChild.children[0].classList.contains('TASK_PINNED')).toBe(true);
});