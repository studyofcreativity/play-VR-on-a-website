const mainScreen = document.getElementById("mainScreen");
const createScreen = document.getElementById("createScreen");
const createVRBtn = document.getElementById("createVR");
const playVRBtn = document.getElementById("playVR");
const uploadGameBtn = document.getElementById("uploadGame");
const backBtn = document.getElementById("backBtn");
const fileList = document.getElementById("fileList");

createVRBtn.addEventListener("click", () => {
  mainScreen.classList.add("hidden");
  createScreen.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  createScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
});

playVRBtn.addEventListener("click", () => {
  alert("The 'Play VR' feature will be added soon!");
});

uploadGameBtn.addEventListener("click", async () => {
  try {
    const dirHandle = await window.showDirectoryPicker();
    fileList.innerHTML = `<li>📁 <strong>${dirHandle.name}</strong></li>`;

    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind === "file" && name.endsWith(".exe")) {
        const li = document.createElement("li");
        li.textContent = `🎮 Found EXE: ${name}`;
        fileList.appendChild(li);
      }
    }

    if (fileList.children.length === 1) {
      const li = document.createElement("li");
      li.textContent = "⚠️ No .exe files found in this folder.";
      fileList.appendChild(li);
    }
  } catch (err) {
    console.error(err);
  }
});
