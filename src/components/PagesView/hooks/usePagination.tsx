import { stat } from "fs";
import { useReducer } from "react";

export interface PaginationState {
  currentPage: number;
  totalPages: number;
}

export type PaginationAction =
  | { type: "nextPage" | "previousPage" }
  | {
      type: "totalPages";
      payload: {
        totalPages: number;
        columnId: string;
      };
    };

const initialState = {
  pagination: {
    totalPages: 1,
    currentPage: 1,
  } as PaginationState,
  metadata: {} as Record<string, number>,
};

function paginationReducer(
  state: typeof initialState,
  action: PaginationAction
): typeof initialState {
  switch (action.type) {
    case "nextPage": {
      if (state.pagination.currentPage === state.pagination.totalPages)
        return state;
      return {
        ...state,
        pagination: {
          currentPage: state.pagination.currentPage + 1,
          totalPages: state.pagination.totalPages,
        },
      };
    }
    case "previousPage": {
      if (state.pagination.currentPage === 1) return state;
      return {
        ...state,
        pagination: {
          currentPage: state.pagination.currentPage - 1,
          totalPages: state.pagination.totalPages,
        },
      };
    }
    case "totalPages": {
      const columnTotalPages = state.metadata[action.payload.columnId];

      // If the totalPages of the column hasn't changed
      if (columnTotalPages === action.payload.totalPages) return state;

      // If the totalPages of the column has changed
      const newMetadata = {
        ...state.metadata,
        [action.payload.columnId]: action.payload.totalPages,
      };
      let maxTotalPages = 1;
      for (const columnId in newMetadata) {
        if (newMetadata[columnId] > maxTotalPages)
          maxTotalPages = newMetadata[columnId];
      }
      return {
        pagination: {
          currentPage: state.pagination.currentPage,
          totalPages: maxTotalPages,
        },
        metadata: newMetadata,
      };
    }
    default:
      return state;
  }
}

export function usePagination() {
  const [fullState, updatePagination] = useReducer(
    paginationReducer,
    initialState
  );
  return [fullState.pagination, updatePagination] as const;
}
