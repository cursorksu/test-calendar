import moment from 'moment';

export const MainNavItems: NavItem[] = [
  {
    id: 111, value: 'Home', icon: 'icon-home', link: '/',
  },
  {
    id: 222, value: 'Dashboard', icon: 'icon-bar', link: '/',
  },
  {
    id: 333, value: 'Inbox', icon: 'icon-mail', link: '/',
  },
  {
    id: 444, value: 'Products', icon: 'icon-barcode', link: '/',
  },
  {
    id: 555, value: 'Invoices', icon: 'icon-note', link: '/',
  },
  {
    id: 666, value: 'Customers', icon: 'icon-user', link: '/',
  },
  {
    id: 777, value: 'Chat Room', icon: 'icon-chat', link: '/',
  },
  {
    id: 888, value: 'Calendar', icon: 'icon-calendar', link: '/',
  },
  {
    id: 999, value: 'Help Center', icon: 'icon-support', link: '/',
  },
  {
    id: 100, value: 'Settings', icon: 'icon-settings', link: '/',
  },
];

export const events: ({
  allDay: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resource: any[];
  start: moment.Moment;
  end: moment.Moment;
  title: string;
})[] = [
  {
    title: 'some event',
    start: moment().add(-5, 'day').startOf('day'),
    end: moment().add(-5, 'day').startOf('day'),
    allDay: true,
    resource: [],
  },
  {
    title: 'some event shirt',
    start: moment().add(-1, 'day').startOf('day'),
    end: moment().add(-2, 'day').startOf('day'),
    allDay: true,
    resource: [],
  },
];

export const now = () => new Date(moment().toString());
