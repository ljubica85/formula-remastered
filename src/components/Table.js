import React from "react";

function TableHead({ number, content }) {
  return (
    <tr className='head'>
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


export default function Table({ number, head, children }) {
  return (
    <table>
      <thead>
        <TableHead number={number} content={head} />
      </thead>
      <tbody>{children}</tbody>
      <TableFoot number={number} />
    </table>
  );
}
