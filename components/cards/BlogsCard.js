import { useEffect, useState } from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from '@mui/material'

export default function BlogsCard({ data }) {
  return (
    <div className="my-7 mx-auto grid w-11/12 grid-cols-2 justify-center gap-5 md:container sm:my-20 sm:grid-cols-2 md:w-10/12 md:grid-cols-3 md:gap-10 lg:grid-cols-3">
      {data?.map((item) => {
        return <BlogCard key={item._id} item={item} />
      })}
    </div>
  )
}

function BlogCard({ item }) {
  const [pageLoading, setPageLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false)
    }, 1500)
  }, [])

  const {
    _id,
    blog_slug,
    blog_image,
    blog_title,
    blog_posteddate,
    // blog_postedby,
    // blog_description,
  } = item
  const redirectUrl = `/blogs/${blog_slug}-${_id}`
  return (
    <Link href={redirectUrl}>
      <div className="h-full rounded-lg bg-white font-inter shadow-lg md:rounded-xl mt-2 sm:mt-10">
        <div className="relative aspect-[4/3] animate-opacityAnimation rounded-tl-xl">
          {pageLoading ? (
            <Skeleton variant="rectangular" className="rounded-t-lg h-full w-full md:rounded-t-xl" />
          ) : (
            <Image
              loading="lazy"
              fill
              src={blog_image}
              alt={blog_title}
              className="w-full rounded-t-lg object-cover shadow md:rounded-t-xl"
            />
          )}
          <div className="absolute top-5 left-3 shadow-gray-600">
            {/* <span className="-mt-3 bg-light-grey text-theme-primary-main font-medium text-sm rounded-3xl p-1">
              {renderDate(blog_posteddate)}
            </span> */}
          </div>
        </div>
        <div className="p-2 md:p-4">
          {pageLoading ? (
            <Skeleton
              variant="rectangular"
              className="mb-3 h-4 w-full rounded-xl"
            />
          ) : (
            <div className="flex justify-start text-black">
              <span className="flex items-center text-xs font-normal capitalize text-dark-grey">
                {moment(blog_posteddate).format('ll')}
              </span>
            </div>
          )}
          {pageLoading ? (
            <Skeleton
              variant="rectangular"
              className="h-10 w-full rounded-xl md:h-12 "
            />
          ) : (
            <p className="m-0 mt-1 h-10  overflow-hidden text-sm font-medium capitalize tracking-tight text-black hover:underline md:mt-2 md:h-12 md:text-base">
              {blog_title}
            </p>
          )}
          {/* <div
            className="text-sm tracking-tight font-normal capitalize text-black hover:underline md:h-10 h-6 overflow-hidden"
            dangerouslySetInnerHTML={{ __html: blog_description }}
          /> */}

          {/* <AppButton variant="contained" title="READ MORE" /> */}
        </div>
      </div>
    </Link>
  )
}
