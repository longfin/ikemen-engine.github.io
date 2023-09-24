async function get_version_name() {
    const json = await fetch("https://api.github.com/repos/ikemen-engine/Ikemen-GO/releases/latest").then((response) => response.json())
    return json.name;
}

async function set_version_name() {
    let name = await get_version_name()
    if (name[0] == "v") {name = name.slice(1)}
    document.getElementById("version").innerText = "Download latest version: " + name;
}

set_version_name()