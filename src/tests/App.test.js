import fs from 'fs';
import util from 'util';


const readFile = util.promisify(fs.readFile);
const getJSONFile = async () => {
  const JSONFile = await readFile('package.json');

  if (!JSONFile){
    throw new Error(`Could not find package.json`)
  }
  return JSONFile;
}


test("Tests working", () => {
  expect(1 + 1).toBe(2);
});

describe('dependencies', () => {

  test("JSON data comes back", async () => {
    const JSONFile = await getJSONFile();
    const JSONData = JSON.parse(JSONFile);
    const dependencies = JSONData.dependencies;

    const materialUI = dependencies["@material-ui/core"];

    expect(materialUI === undefined).toBe(false);
  })
})
