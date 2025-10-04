// Elementos
const mainScreen = document.getElementById("mainScreen");
const createScreen = document.getElementById("createScreen");
const createVRBtn = document.getElementById("createVR");
const playVRBtn = document.getElementById("playVR");
const uploadGameBtn = document.getElementById("uploadGame");
const backBtn = document.getElementById("backBtn");
const fileList = document.getElementById("fileList");

// Cambiar a pantalla "Create VR"
createVRBtn.addEventListener("click", () => {
  mainScreen.classList.add("hidden");
  createScreen.classList.remove("hidden");
});

// Volver al menú principal
backBtn.addEventListener("click", () => {
  createScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
  fileList.innerHTML = "";
});

// Botón "Play VR"
playVRBtn.addEventListener("click", () => {
  alert("The 'Play VR' feature will be added soon!");
});

// Botón "Upload Game" — permite elegir carpeta
uploadGameBtn.addEventListener("click", async () => {
  try {
    // Mostrar selector de carpetas
    const dirHandle = await window.showDirectoryPicker();
    fileList.innerHTML = `<li>📁 Folder selected: <strong>${dirHandle.name}</strong></li>`;

    // Buscar archivos dentro
    let foundExe = false;
    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind === "file" && name.endsWith(".exe")) {
        foundExe = true;
        const li = document.createElement("li");
        li.textContent = `🎮 Found EXE: ${name}`;
        fileList.appendChild(li);
      }
    }

    if (!foundExe) {
      const li = document.createElement("li");
      li.textContent = "⚠️ No .exe files found in this folder.";
      fileList.appendChild(li);
    }
  } catch (err) {
    console.error("No folder selected or error:", err);
  }
});
