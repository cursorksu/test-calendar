import React, { FC, useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { UserEvent } from '../UserEvent';
import { Modal } from '../Modal';
import './UserCalendar.scss';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { events } from '../../constants/data';

const formats = {
  dateFormat: 'D',
  dayFormat: 'ddd DD/MM',
};

export const UserCalendar: FC = () => {
  const localizer = momentLocalizer(moment);
  const [thisNotes, setThisNotes] = useState('');
  const [thisTitle, setThisTitle] = useState('');
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const [eventArray, setEventArray] = useState<CustomEvent[]>(events);
  const [isModal, setIsModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [color, setColor] = useState('#3b86ff');
  const [newEvent, setNewEvent] = useState({
    start: new Date(),
    end: new Date(),
    box: [0, 0],
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditEvent = (item: any) => {
    const obj = {
      ...newEvent,
      box: [600, 480],
    };

    setThisNotes(item.resource[1]);
    setThisTitle(item.title);
    setNewEvent(obj);
    if (!isModal) {
      setIsModal(true);
      setIsEdit(true);
    }
  };

  const handleClose = () => {
    if (isModal) {
      setIsModal(false);
      setIsEdit(false);
    }
  };

  const setEventColor = () => {
    return { style: { background: color } };
  };

  const onSaveEvent = (obj: {
    allDay: boolean;
    resource: string[];
    start: Date | Date[];
    end: Date | Date[];
    title: string;
  }) => {
    if (isEdit) {
      setEventArray([
        ...eventArray.filter((elem: { title: string }) => elem.title !== thisTitle),
        obj,
      ]);
    } else {
      setEventArray([...eventArray, obj]);
    }

    setIsModal(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createNewEvent = (slot: any) => {
    if (!isModal) {
      setIsModal(true);
      const obj = {
        start: slot.slots[0],
        end: slot.slots[0],
        box: [slot.box.x, slot.box.y],
      };

      setNewEvent(obj);
    }
  };

  const choseColor = (customColor: string) => {
    setColor(customColor);
  };

  return (
    <div className="calendar__wrapper">
      {isModal && (
        <Modal onClose={handleClose} x={newEvent.box[1]} y={newEvent.box[0]}>
          <UserEvent
            thisNotes={thisNotes}
            thisTitle={thisTitle}
            isEdit={isEdit}
            setNewObj={setNewEvent}
            onCancel={handleClose}
            onSave={onSaveEvent}
            obj={newEvent}
            choseColor={choseColor}
          />
        </Modal>
      )}
      <h1 className="title">Calendar</h1>
      <Calendar
        resourceTitleAccessor="Calendar View"
        localizer={localizer}
        events={eventArray}
        startAccessor="start"
        step={60}
        popup
        formats={formats}
        endAccessor="end"
        selectable="ignoreEvents"
        onDoubleClickEvent={handleEditEvent}
        onSelecting={({ end, start }) => end === start}
        eventPropGetter={setEventColor}
        onSelectSlot={createNewEvent}
      />
    </div>
  );
};
