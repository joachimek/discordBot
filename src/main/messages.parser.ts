const parser = (content: string) => {
  let command = "";
  let props = "";

  if (content?.split(" ")?.length > 1) {
    [command, props] = [
      content?.slice(1, content?.indexOf(" ")),
      content?.slice(content?.indexOf(" ") + 1),
    ];
  } else {
    command = content?.slice(1);
  }

  return [command, props];
};

export default parser;
