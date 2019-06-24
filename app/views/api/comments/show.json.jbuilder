json.comment do
    json.partial! 'api/comments/comment', comment: @comment
end

json.bill do
    json.partial! 'api/bills/bill', bill: @bill
end