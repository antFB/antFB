import * as React from 'react';

type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed'

export interface HttpRequestHeader {
  [key: string]: string;
}

export interface File {
  uid: number;
  size: number;
  name: string;
  lastModifiedDate?: Date;
  url?: string;
  status?: UploadFileStatus;
  percent?: number;
  thumbUrl?: string;
  originFileObj?: File;
}

interface UploadChangeParam {
  file: File;
  fileList: Array<File>;
  event?: { percent: number };
}

export interface UploadProps {
  type?: 'drag' | 'select';
  name?: string;
  defaultFileList?: Array<File>;
  fileList?: Array<File>;
  action: string;
  data?: Object;
  headers?: HttpRequestHeader;
  showUploadList?: boolean;
  multiple?: boolean;
  accept?: string;
  beforeUpload?: (file: File) => boolean | PromiseLike<any>;
  onChange?: (info: UploadChangeParam) => void;
  listType?: 'text' | 'picture' | 'picture-card';
  className?: string;
  onPreview?: (file: File) => void;
  onRemove?: (file: File) => void;
  supportServerRender?: boolean;
  style?: React.CSSProperties;
}

export interface UploadListProps {
  listType?: 'text' | 'picture' | 'picture-card';
  onPreview?: (file: File) => void;
  onRemove?: (file: File) => void;
  items?: Array<File>;
  progressAttr?: Object;
}
