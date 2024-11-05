import React, { useEffect, useState } from "react";
import GridBody from "@/containers/table-view/components/grid-body/index";
import useGetQuery from "@/hooks/api/useGetQuery";

import Pagination from "@/components/pagination";
import { get, isNil } from "lodash";
import { useTranslation } from "react-i18next";

const GridView = ({
  HeaderBody = null,
  columns = [],
  url,
  key,
  eyeUrl,
  params = {},
  enabled = true,
  getCount = () => {},
  hasActionColumn = false,
  downloadExcel = false,
  viewUrl = "#",
  defaultPageSize = 48,
}) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [sort, setSort] = useState(undefined);
  const { data, isLoading, isFetching } = useGetQuery({
    key: key,
    url: url,
    params: {
      page,
      ...params,
      sort_by: sort,
      page_size: pageSize,
    },
    enabled,
  });
  useEffect(() => {
    if (!isNil(get(data, "data.count"))) {
      getCount(get(data, "data.count", 0));
    }
  }, [data]);

  return (
    <>
      {get(data, "data.data", [])?.length > 0 ? (
        <>
          <GridBody
            downloadExcel={downloadExcel}
            eyeUrl={eyeUrl}
            hasActionColumn={hasActionColumn}
            handleSort={setSort}
            columns={columns}
            rows={get(data, "data.data", [])}
            pageSize={pageSize}
            page={page}
            setPage={setPage}
          />
          <Pagination
            page={page}
            setPage={setPage}
            pageCount={get(data, "data.total_pages", 0)}
          />
        </>
      ) : (
        <p className={"py-5"}>
          {hasActionColumn ? (
            <EmptyData viewUrl={viewUrl} />
          ) : (
            t("Ushbu mahsulot bo’yicha hozircha e’lonlar mavjud emas...")
          )}
        </p>
      )}
    </>
  );
};

export default GridView;
