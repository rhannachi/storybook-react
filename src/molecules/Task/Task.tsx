import React from 'react'
import { Icon } from "../../atoms/Icon/Icon"
import Checkbox from "../../atoms/Checkbox/Checkbox"

type TaskProps = {
  task: {
    id: string,
    title: string,
    state: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED'
  },
  onArchiveTask: (id: string) => void,
  onPinTask: (id: string) => void
}

const Task = ({ task: { id, title, state }, onPinTask, onArchiveTask }: TaskProps) => {

  return (
    <div className="flex flex-row p-3 bg-white rounded-sm border-2 border-cyan-400">

      <Checkbox
        className="mr-4"
        disabled
        checked={state === "TASK_ARCHIVED"}
        onChange={() => onArchiveTask(id)}
      />

      {/*<label*/}
      {/*  htmlFor="checked"*/}
      {/*  aria-label={`archiveTask-${id}`}*/}
      {/*  className="mr-4"*/}
      {/*>*/}
      {/*  <input*/}
      {/*    type="checkbox"*/}
      {/*    disabled={true}*/}
      {/*    name="checked"*/}
      {/*    id={`archiveTask-${id}`}*/}
      {/*    checked={state === "TASK_ARCHIVED"}*/}
      {/*  />*/}
      {/*  <span*/}
      {/*    className="checkbox-custom" // TODO*/}
      {/*    onClick={() => onArchiveTask(id)}*/}
      {/*  />*/}
      {/*</label>*/}

      <label className="w-full text-gray-500" htmlFor="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <Icon
            className="mb-1"
            color={state === "TASK_PINNED" ? "fill-cyan-400" : "fill-gray-200"}
            icon="star-full"
            size="sm"
          />
        </button>
      )}
    </div>
  )
}

export default Task