// true nếu giá trị là 1 nguồn ảnh dùng được trực tiếp (base64, URL tuyệt đối, path nội bộ) —
// dùng để phân biệt với logo dạng chữ/emoji thuần.
export function isImageValue(v) {
  return !!v && (v.startsWith("data:") || v.startsWith("http") || v.startsWith("/"));
}

export function imgSrc(v, fallback = "") {
  return isImageValue(v) ? v : fallback;
}
