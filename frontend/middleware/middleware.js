// I have found this to be a point of confusion for me also.Just posting my use case /solution here.

// I have three subreducers that handle an array of three different resource types(clients, projects, jobs).
// When I delete a client(REMOVE_CLIENT), all related projects and jobs must be deleted.Jobs are related to 
// clients through a project, so the jobs reducer must have access to the projects to do the join logic.
// The jobs reducer must get a list of all project IDs that belongs to the client being deleted, and then
// remove any matching job from the store.

// I got around this issue with the following middleware:

export default store => next => action => {
    next({ ...action, getState: store.getState });
}
// So that every action has access to the root store via action.getState().