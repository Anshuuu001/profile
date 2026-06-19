
/**
 * Set dynamic page title
 */
export const setTitle = (title) => {
  document.title = `${title} | Portfolio`;
};

/**
 * Set meta description
 */
export const setMetaDescription = (content) => {
  let meta = document.querySelector("meta[name='description']");

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }

  meta.content = content;
};

/**
 * Basic SEO setup
 */
export const setSEO = ({ title, description }) => {
  setTitle(title);
  setMetaDescription(description);
};