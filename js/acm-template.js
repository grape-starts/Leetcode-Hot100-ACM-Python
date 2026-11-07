// Build the per-problem Python ACM starter shown inside the editor.
// Input/output snippets come from the existing, tested reference program;
// only lines that perform IO are quoted, never the algorithm body.
export function acmPythonTemplate(problem) {
  const original = problem.templates.acm.python;
  const reference = problem.solutions.acm.python;
  const lines = reference.split('\n');
  const inputLines = lines.filter((line) => /\bsys\.stdin\b|\binput\s*\(|\.readline\s*\(|\.split\s*\(/.test(line));
  const outputLines = lines.filter((line) => /\bprint\s*\(|\bsys\.stdout\.write\s*\(/.test(line));
  const sample = problem.acmTests[0];
  const comment = (line) => `# ${line.trim()}`;
  return [
    '# ── 本题输入输出参考（Python） ──',
    '# 标准输入示例：',
    ...sample.input.trimEnd().split('\n').map((line) => `#   ${line}`),
    '# 期望输出：',
    ...sample.output.trimEnd().split('\n').map((line) => `#   ${line}`),
    '# 读取方式参考：',
    ...inputLines.slice(0, 12).map(comment),
    '# 输出方式参考：',
    ...outputLines.slice(-8).map(comment),
    '# ── 在下方完成你的程序 ──',
    '',
    original,
  ].join('\n');
}
