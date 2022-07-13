import { Dispatch, ReactNode, useEffect } from "react";
import { useSelector } from 'react-redux';
import { State } from "../../state";
import {
  MARGIN_BOTTOM_INCH,
  MARGIN_TOP_INCH,
  PAGE_HEIGHT_INCH,
} from "./constants";
import { PaginationAction, PaginationState } from "./hooks/usePagination";

function* visitAllElements(element: HTMLElement): Generator<HTMLElement> {
  let children = element.children;
  if (
    children.length === 0 ||
    (element.tagName === "LI" &&
      element.classList.contains("public-DraftStyleDefault-unorderedListItem"))
  ) {
    yield element;
    return;
  }
  for (const child of children) {
    yield* visitAllElements(child as HTMLElement);
  }
}

// TODO it seems that the bottom DraftEditor-root, if empty, it creates an extra empty page
function paginateAndGetTotalPages(
  columnId: string,
  pageId: string,
  activePage: number,
  pageHeightInch: number,
  columnHeightInch: number
) {
  const columnElement = document.querySelector<HTMLElement>(`#${columnId}`)!;
  columnElement.style.transform = "";

  const initialColumnTop = columnElement.getBoundingClientRect().top;

  const pageElement = document.querySelector<HTMLElement>(`#${pageId}`)!;
  const CSS_PIXELS_PER_INCH = 96;
  const scaleFactor =
    (pageHeightInch * CSS_PIXELS_PER_INCH) /
    pageElement.getBoundingClientRect().height;
  const columnHeightPx = (columnHeightInch * CSS_PIXELS_PER_INCH) / scaleFactor;

  let totalPages = 1;
  let pageBottom = columnElement.getBoundingClientRect().top + columnHeightPx;

  // To calculate the translateY
  let activePageTop: number | undefined;

  for (const element of visitAllElements(columnElement)) {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementBottom > pageBottom) {
      totalPages += 1;
      pageBottom = elementTop + columnHeightPx;

      // To calculate the translateY
      if (!activePageTop && totalPages === activePage)
        activePageTop = elementTop;
    }

    if (totalPages === activePage) {
      element.style.opacity = "";
    } else {
      element.style.opacity = "0";
    }
  }

  // To calculate the translateY
  if (!activePageTop) activePageTop = initialColumnTop;

  columnElement.style.transform = `translateY(-${
    (activePageTop - initialColumnTop) * scaleFactor
  }px)`;
  return { totalPages, initialColumnTop, activePageTop, scaleFactor };
}

export function PaginatedColumn(props: {
  children: ReactNode;
  className: string;
  id: string;
  pageId: string;
  pagination: PaginationState;
  updatePagination: Dispatch<PaginationAction>;
}) {
  const state = useSelector((state: State) => state.cvData);

  useEffect(() => {
    const { totalPages } = paginateAndGetTotalPages(
      props.id,
      props.pageId,
      props.pagination.currentPage,
      PAGE_HEIGHT_INCH,
      PAGE_HEIGHT_INCH - MARGIN_TOP_INCH - MARGIN_BOTTOM_INCH
    );
    props.updatePagination({
      type: "totalPages",
      payload: {
        totalPages,
        columnId: props.id,
      },
    });
  }, [state, props.pagination.currentPage]);

  return (
    <div className={props.className} id={props.id}>
      {props.children}
    </div>
  );
}
