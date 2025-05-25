import * as React from 'react';
import {
  DataGridPremium,
  GridColDef,
  GridRowsProp,
  GridToolbar,
  GridRowParams,
} from '@mui/x-data-grid-premium';

export default function CommentsDataGrid() {
  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedRow, setSelectedRow] = React.useState<any | null>(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
        setLoading(false);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'postId', headerName: 'Post ID', width: 100 },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'body', headerName: 'Body', width: 400 },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGridPremium
        rows={rows}
        columns={columns}
        loading={loading}
        slots={{
          toolbar: GridToolbar,
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        onRowClick={(params: GridRowParams) => setSelectedRow(params.row)}
      />
      {selectedRow && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setSelectedRow(null)}
        >
          <div
            style={{
              background: '#fff',
              padding: 24,
              borderRadius: 8,
              minWidth: 300,
              maxWidth: 500,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <h2>Comment Details</h2>
            <p><strong>Post ID:</strong> {selectedRow.postId}</p>
            <p><strong>ID:</strong> {selectedRow.id}</p>
            <p><strong>Name:</strong> {selectedRow.name}</p>
            <p><strong>Email:</strong> {selectedRow.email}</p>
            <p><strong>Body:</strong> {selectedRow.body}</p>
            <button onClick={() => setSelectedRow(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}