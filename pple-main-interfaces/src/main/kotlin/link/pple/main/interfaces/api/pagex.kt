package link.pple.main.interfaces.api

import link.pple.main.domain.Page
import link.pple.main.domain.Paged

/**
 * @Author Heli
 */
data class PagedDto<T>(
    val content: List<T>,
    val page: PageDto
)

data class PageDto(
    val number: Int,
    val size: Int,
    val totalElements: Long,
    val totalPages: Int
)

inline fun <T, R> Paged<T>.toDto(transform: (T) -> R): PagedDto<R> {
    return PagedDto(
        content = content.map(transform),
        page = page.toDto()
    )
}

fun Page.toDto() = PageDto(number, size, totalElements, totalPages)

inline fun <T, R> link.pple.assets.client.PagedDto<T>.toPagedDto(convert: (T) -> R): PagedDto<R> {
    return PagedDto(
        content = content.map(convert),
        page = PageDto(
            number = page.number,
            size = page.size,
            totalElements = page.totalElements,
            totalPages = page.totalPages
        )
    )
}
