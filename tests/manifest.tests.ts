import {getFile} from "./utils";

test('test the manifest file contain the right configs', async () => {
    const file = await getFile('../src/', 'manifest.json');
    const config = JSON.parse(file);

    expect(config.manifest_version).toEqual(2);
    expect(config.name).toEqual('Netflix Subtitles Grabber');
    expect(config.version).toEqual("0.1");
    expect(config.icons[128]).toEqual("icon.png");
});

