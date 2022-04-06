import {join} from 'path';
import {readFileSync} from 'fs';

function run () {
  console.log(process.cwd());
  const pkgPath = join(process.cwd(), 'package.json');
  const contents = readFileSync(pkgPath);
  console.log(contents.toString());
}

run();