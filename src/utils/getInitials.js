export const getInitials = (fullname) => {
    if (!fullname) return;
  
    const names = fullname.trim().split(" ");
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
  
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };