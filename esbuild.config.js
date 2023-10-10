import { build } from 'esbuild';
import { glob } from 'glob';

async function transpileExpressFiles() {
  const expressFiles = glob.sync('build/**/*.{js,ts}', {
    nodir: true,
  });

  try {
    await build({
      entryPoints: expressFiles,
      outdir: 'dist',
      bundle: false,
      platform: 'node',
      target: 'node20', // Update to the appropriate Node.js version you are targeting
      minify: true,
      tsconfig: 'tsconfig.json',
      sourcemap: false,
      format: 'esm',
      minifyWhitespace: true,
    });

    console.log('Express files transpiled successfully!');
  } catch (error) {
    console.error('Error transpiling Express files:', error);
    process.exit(1);
  }
}

transpileExpressFiles();
