import React, { FC, useState, ChangeEvent } from 'react';
import { Calendar } from 'primereact/calendar';
import { SliderPicker, ColorResult } from 'react-color';
import classNames from 'classnames';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './UserEvent.scss';

interface Props {
  thisNotes: string;
  thisTitle: string;
  isEdit: boolean;
  choseColor: (customColor: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNewObj: (obg: any) => void;
  onCancel: () => void;
  onSave: (obj: {
    allDay: boolean;
    resource: string[];
    start: Date | Date[];
    end: Date | Date[];
    title: string; }) => void;
  obj: Obj;
}

export const UserEvent: FC<Props> = ({
  choseColor, onSave, setNewObj,
  obj, onCancel, isEdit,
  thisTitle, thisNotes,
}) => {
  const [title, setTitle] = useState(!isEdit ? '' : thisTitle);
  const [color, setColor] = useState('#3b86ff');
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isInputError, setInputError] = useState(false);
  const [notes, setNotes] = useState(!isEdit ? '' : thisNotes);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const fieldName = event.currentTarget.name;

    setInputError(false);

    switch (fieldName) {
      case 'title':
        setTitle(value);
        break;
      case 'notes':
        setNotes(value);
        break;
      default:
    }
  };

  const handleCalendarDate = (date: {
    value: React.SetStateAction<Date | Date[]>;
  }) => {
    setNewObj({ ...obj, start: date.value });
  };

  const handleCalendarTime = (time: {
    value: React.SetStateAction<Date | Date[]>;
  }) => {
    setNewObj({ ...obj, start: time.value });
  };

  const handleChangeColor = (CustomColor: ColorResult) => {
    setColor(CustomColor.hex);
    choseColor(CustomColor.hex);
  };

  const handleColorsOpen = () => {
    setIsColorOpen(true);
  };

  const handlerSave = () => {
    if (title.length < 30 && title.length > 1) {
      const newEvent = {
        title,
        start: obj.start,
        end: obj.start,
        allDay: true,
        resource: [color, notes],
      };

      setIsColorOpen(false);
      onSave(newEvent);
    } else {
      setInputError(true);
    }
  };

  const handleCancel = () => {
    setIsColorOpen(false);
    setInputError(false);
    setNotes('');
    setTitle('');
    setColor('#3b86ff');
    onCancel();
  };

  return (
    <form className="event" action="#">
      <input
        name="title"
        type="text"
        className={classNames('event__input', { 'event__input--error': isInputError })}
        placeholder="event name"
        onChange={handleChange}
        value={title}
        autoComplete="none"
      />
      {isInputError && (
        <p className="event__error">
          Put more then 0  and less then 30 symbols
        </p>
      )}
      <Calendar
        name="date"
        value={obj.start}
        dateFormat="dd-mm-yy"
        onChange={handleCalendarDate}
      />
      <Calendar
        name="time"
        value={obj.start}
        showTime
        timeOnly
        hourFormat="24"
        onChange={handleCalendarTime}
      />

      <input
        name="notes"
        type="text"
        className="event__input"
        placeholder="notes"
        onChange={handleChange}
        value={notes}
      />

      <div className="buttons">
        <button
          type="button"
          className={classNames(
            'buttons__event',
            'buttons__event--danger',
            { 'buttons__event--edit': isEdit },
          )}
          onClick={handleCancel}
        >
          {!isEdit ? 'Cancel' : 'Discard'}
        </button>
        <button
          name="color"
          type="button"
          className="buttons__color"
          onClick={handleColorsOpen}
        >
          <span className="icon-color" />
        </button>
        <button
          type="button"
          onClick={handlerSave}
          className={classNames('buttons__event', { 'buttons__event--edit': isEdit })}
        >
          {!isEdit ? 'Save' : 'Edit'}
        </button>
      </div>
      {isColorOpen && (
        <SliderPicker
          color={color}
          onChangeComplete={handleChangeColor}
        />
      )}
    </form>
  );
};
