const statusOfTask = [
    {
        id: '0',
        name: 'DEFAULT',
    },
    {
        id: '1',
        name: 'IN_PROCESS',
    },
    {
        id: '2',
        name: 'STATUS_COMPLETE',
    },
    {
        id: '3',
        name: 'ALL',
    },
];

export const foundStatusId = (name) => {
    const status = statusOfTask.filter(e => e.name === name);
    return status.id;
};

export default statusOfTask;
