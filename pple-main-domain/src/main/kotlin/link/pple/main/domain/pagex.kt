package link.pple.main.domain

import link.pple.assets.client.PageDto
import link.pple.assets.client.PagedDto

/**
 * @Author Heli
 */
data class Paged<T>(
    val content: List<T>,
    val page: Page
) : List<T> by content {

    companion object {
        fun <T, R> from(dto: PagedDto<T>, transform: (T) -> R): Paged<R> {
            return Paged(
                content = dto.content.map(transform),
                page = Page.from(dto.page)
            )
        }
    }
}


data class Page(
    val number: Int,
    val size: Int,
    val totalElements: Long,
    val totalPages: Int,
    val first: Boolean,
    val last: Boolean,
    val hasNext: Boolean,
    val hasPrevious: Boolean
) {

    companion object {
        fun from(dto: PageDto): Page {
            return Page(
                number = dto.number,
                size = dto.size,
                totalElements = dto.totalElements,
                totalPages = dto.totalPages,
                first = dto.first,
                last = dto.last,
                hasNext = dto.hasNext,
                hasPrevious = dto.hasPrevious
            )
        }
    }
}

