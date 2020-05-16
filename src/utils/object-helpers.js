export const updateObjectProperties = (items, objPropName, propName, newObjProps) => {
  return items.map(u => {
    if (u[objPropName] === propName) {
      return { ...u, ...newObjProps }
    }
    return u;
  })
};
