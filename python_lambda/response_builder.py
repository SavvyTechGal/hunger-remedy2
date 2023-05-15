def build_response(df):
    # Build the response
    top_matches = df.sort_values('similarity', ascending=False)[:5]
    top_matches = top_matches.drop(['similarity'], axis=1)
    top_matches = top_matches.reset_index(drop=True)
    top_matches.index += 1

    # Convert the top matches to JSON
    response_body = top_matches.to_dict('records')

    return response_body
