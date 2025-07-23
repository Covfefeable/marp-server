import { exec, execSync } from "child_process";
import dayjs from "dayjs";
import { promises as fs } from "fs";

class MarpService {
  async generate(fileName: string, content: string): Promise<Buffer<ArrayBufferLike>> {
    const currentDir = process.cwd();
    const inputFileName = `${fileName.split(".").slice(0, -1).join(".")}_${dayjs().valueOf()}.md`;
    const inputFilePath = `${currentDir}/inputs/${inputFileName}`;
    const outputFilePath = `${currentDir}/outputs/${fileName}`;
    await fs.mkdir(`${currentDir}/outputs`, { recursive: true });
    await fs.mkdir(`${currentDir}/inputs`, { recursive: true });
    await fs.writeFile(inputFilePath, content);
    console.log(`Generating Marp file: ${inputFilePath} -> ${outputFilePath}`);

    try {
      execSync(
        `npx @marp-team/marp-cli ${inputFilePath} -o ${outputFilePath}`
      );
    } catch (error) {
      throw new Error("Failed to generate Marp file");
    }
    return await fs.readFile(outputFilePath);
  }
}

export const marpService = new MarpService();
