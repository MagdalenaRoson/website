const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;

export async function fetchEntries(contentType) {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?content_type=${contentType}&include=2`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch contentful entries: ${res.statusText}`);
  }

  const data = await res.json();

  const assetMap = {};
  for (const asset of data.includes?.Asset || []) {
    assetMap[asset.sys.id] = asset;
  }

  // Attach resolved media to each item
  const enrichedItems = data.items.map((item) => {
    if (item.fields.media?.sys?.id) {
      const assetId = item.fields.media.sys.id;
      item.fields.media = assetMap[assetId];
    }
    return item;
  });

  return enrichedItems;
}
