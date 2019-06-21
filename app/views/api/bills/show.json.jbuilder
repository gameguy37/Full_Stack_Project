json.bill do
    json.partial! 'api/bills/bill', bill: @bill
end

@payments.each do |payment|
    json.payments do
        json.set! payment.id do
            json.partial! 'api/payments/payment', payment: payment
        end
    end
end

@users.each do |user|
    json.users do
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end
end

@comments.each do |comment|
    json.comments do
        json.set! comment.id do
            json.partial! 'api/comments/comment', comment: comment
        end
    end
end