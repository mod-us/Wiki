import React from 'react';
import EditOptionsDropdown from '@site/src/components/EditOptionsDropdown';

export default function EditThisPage({editUrl}: {editUrl: string}): JSX.Element {
  return <EditOptionsDropdown editUrl={editUrl} />;
}
