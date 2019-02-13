export const isServerSideRendering = (() => {
  try {
    return !(document !== undefined);
  } catch (e) {
    return true;
  }
})();