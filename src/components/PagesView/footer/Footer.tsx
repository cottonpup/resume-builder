import type { PaginationAction, PaginationState } from '../hooks/usePagination';
import { FullPreviewFooter } from './FullPreviewFooter';
import { SmallPreviewFooter } from './SmallPreviewFooter';

interface Props {
    pagination: PaginationState;
    updatePagination: React.Dispatch<PaginationAction>;
    isFullPreview: boolean;
}

export function Footer(props: Props) {
    if (props.isFullPreview) {
        return (
            <FullPreviewFooter
                pagination={props.pagination}
                updatePagination={props.updatePagination}
            />
        );
    }

    return <SmallPreviewFooter />;
}
