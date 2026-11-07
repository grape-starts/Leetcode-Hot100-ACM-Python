import test from 'node:test';
import assert from 'node:assert/strict';
import { problems, loadProblem } from '../problems/index.js';
import { acmPythonTemplate } from './acm-template.js';

test('all 100 ACM Python editors include input and output references', async () => {
  assert.equal(problems.length, 100);
  for (const item of problems) {
    const problem = await loadProblem(item.id);
    const template = acmPythonTemplate(problem);
    assert.match(template, /标准输入示例/);
    assert.match(template, /期望输出/);
    assert.match(template, /读取方式参考/);
    assert.match(template, /输出方式参考/);
    for (const line of problem.acmTests[0].input.trimEnd().split('\n')) assert.ok(template.includes(`#   ${line}`));
    for (const line of problem.acmTests[0].output.trimEnd().split('\n')) assert.ok(template.includes(`#   ${line}`));
    assert.ok(template.includes(problem.templates.acm.python));
  }
});
