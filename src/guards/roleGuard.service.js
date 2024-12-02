export const roleGuard = (roles) => {
  return (req, res, next) => {
    console.log(req);
    const { role } = req.user;

    if (roles.includes(role)) {
      next();
    } else {
      res.status(400).send("Permission Denied");
    }
  };
};
