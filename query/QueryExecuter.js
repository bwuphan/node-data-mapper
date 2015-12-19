'use strict';

/**
 * A base interface for QueryExecuters.
 */
function QueryExecuter()
{
}

/**
 * Execute a select query.
 * @param query The SQL to execute.  The query is expected to be escaped.
 * @param callback The callback function that is called when the query is executed.
 *        function callback(err, results)
 *        The results are an array, one entry per row, of objects
 *        that are pairs of column->value.
 */
QueryExecuter.prototype.select = function(/*query, callback*/)
{
  throw new Error('QueryExecuter::select not implemented.');
};

/**
 * Execute an update query.
 */
QueryExecuter.prototype.update = function()
{
  throw new Error('QueryExecuter::update not implemented.');
};

/**
 * Execute a delete query.
 */
QueryExecuter.prototype.delete = function()
{
  throw new Error('QueryExecuter::delete not implemented.');
};

/**
 * Execute an insert query.
 */
QueryExecuter.prototype.insert = function()
{
  throw new Error('QueryExecuter::insert not implemented.');
};

module.exports = QueryExecuter;
