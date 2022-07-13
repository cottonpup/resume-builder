import type { PaginationAction, PaginationState } from "../hooks/usePagination";
import { FullPreviewHeader } from "./FullPreviewHeader";
import { SmallPreviewHeader } from "./SmallPreviewHeader";

interface Props {
  pagination: PaginationState;
  updatePagination: React.Dispatch<PaginationAction>;
  isFullPreview: boolean;
  setIsFullPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header(props: Props) {
  if (props.isFullPreview) {
    return <FullPreviewHeader setIsFullPreview={props.setIsFullPreview} />;
  }

  return (
    <SmallPreviewHeader
      pagination={props.pagination}
      updatePagination={props.updatePagination}
    />
  );
}
