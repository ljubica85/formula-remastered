import React from "react";

function TableHead({ number, content }) {
  return (
    <tr>
      <th colSpan={number}>{content}</th>
    </tr>
  );
}

function TableFoot(number) {
  return (
    <tfoot>
      <tr>
        <td colSpan={number}>&nbsp;</td>
      </tr>
    </tfoot>
  );
}

function EditionalHead(content) {
  <tr>
    {content.map(info => {
      return <th>{info}</th>;
    })}
  </tr>;
}

export default function Table({ number, head, edHead, children }) {
  return (
    <table>
      <thead>
        <TableHead number={number} content={head} />
        {edHead !== "" && <EditionalHead content={edHead} />}
      </thead>
      <tbody>{children}</tbody>
      <TableFoot number={number} />
    </table>
  );
}
