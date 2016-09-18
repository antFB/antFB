import React from 'react';
import { Tooltip, Icon } from 'antd';

const branchUrl = 'https://github.com/antFB/antFB/blob/master/';

export default function EditButton({ title, filename }) {
  return (
    <Tooltip title={title}>
      <a className="edit-button" href={`${branchUrl}${filename}`}>
        <Icon type="edit" />
      </a>
    </Tooltip>
  );
}
