// eslint-disable-next-line
/// <reference types="react-scripts" />

interface NavItem {
  id: number;
  value: string;
  icon: string;
  link: string;
}

interface OriginalEvent {
  originalEvent: Event;
  value: Date|Date[];
  target: {
    name: string;
    id: string;
    value: Date|Date[];
  };
}


interface Box {
  x: number;
  y: number;
  clientX: number;
  clientY: number;
}

interface Bounds {
  top: number;
  left: number;
  x: number;
  y: number;
  right: number;
  bottom: number;
}

interface SlotInfo {
  start: Date;
  end: Date;
  slots: Date[];
  action: 'select' | 'click' | 'doubleClick';
  box: Box | undefined;
  bounds: Bounds | undefined;
}

interface Obj {
  start: Date;
  end: Date;
  box: number[];
}
